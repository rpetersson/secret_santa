"use server"
import { revalidatePath } from "next/cache";
import { getTableClient } from "../dbclient";

export async function dropAllEntities() {
    try {
      let entitiesIterable = getTableClient().listEntities();

      for await (const entity of entitiesIterable) {
        console.log({ rowKey: entity.rowKey as string, partitionKey: entity.partitionKey as string, todoTask: entity.todo as string });
        getTableClient().deleteEntity(entity.partitionKey as string, entity.rowKey as string);
      }
      console.log("Success")

      //Reload page
      
    } catch (e) {
      console.log("Error ", e)
      return { message: `error ${e}` };
    }
  }
  
  