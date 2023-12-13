"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { dbClient } from "./dbclient";

export async function deleteRecordAzTable(prevState: any, formData: FormData) {
    const rowKey = formData.get("id")
    
    console.log(rowKey)
    try {
      await dbClient.deleteEntity("todoTasks", rowKey as string, );
      revalidatePath("/"); // To update the page.
      return { message: "Success" };
    } catch (e) {
      return { message: `error ${e}` };
    }
  }
  