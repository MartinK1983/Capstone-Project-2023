import { applySchema } from "@/util/schema";
import fs from "fs";
import path from "path";

class MockDb {
    constructor() {
        try {
            const path = this.getPath();

            const persistedData = !!path && fs.readFileSync(path);

            let storedItems = [];

            if (persistedData && persistedData.length > 0) {
                const storedJson = JSON.parse(persistedData);
                if (storedJson && storedJson.items && storedJson.items.length) storedItems = storedJson.items;                
            }

            this.connected = true;

            if (!storedItems && !storedItems.length) {
                this.data = [];
                return;
            }

            this.data = storedItems;
        }
        catch (err) {
            this.connected = false;
            this.data = [];
            console.error(err);
        }
    }

    getPath() {
        return path.join(process.cwd(), 'db/db.json');
    }

    async save() {
        return new Promise(resolve => fs.writeFile(this.getPath(), JSON.stringify({ items: this.data }), resolve));
    }

    async handleDbOp(op) {
        if (!this.connected) throw new Error('Database is not connected.');

        // simulate db operation
        await new Promise(resolve => setTimeout(resolve, 250));

        if (!op || typeof op !== 'function') return null;

        const result = op();
        await this.save();
        return result;
    }

    async findAll() {
        return await this.handleDbOp(() => this.data);
    } 

    async findById(id) {
        return await this.handleDbOp(() => {
            const index = this.data.findIndex(x => x.id === id);
            if (index < 0) return false;
            return this.data[index];
        });
    }

    async insertOne() {
        return await this.handleDbOp(() => {
            const newObj = applySchema(null);
            
            const exists = !!this.data.find(a => a.id === newObj.id);

            if (!exists) this.data.push(newObj);
            else return this.insertOne();

            return newObj;
        });
    } 
    
    async updateById(id, update) {
        return await this.handleDbOp(() => {
            const index = this.data.findIndex(x => x.id === id);
            if (index < 0) return false;
            const oldObj = this.data[index];
            const newObj = applySchema(update);
            const result = {...oldObj, ...newObj, id: oldObj.id};
            this.data[index] = result;
            return result;
        });
    } 

    async deleteById(id) {
        return await this.handleDbOp(() => {
            this.data = this.data.filter(a => a.id !== id);
            return true;
        });
    } 
}

const DB = new MockDb();

export default DB;