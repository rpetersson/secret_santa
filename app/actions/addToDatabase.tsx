"use server";
import { revalidatePath } from "next/cache";
import { randomWordsFunction } from "../functions/randomWord";
import { getTableClient } from "../dbclient";

export async function addRecordAzTable(name: string) {
  let usrName = randomWordsFunction();
  try {
    const dataToAdd = {
      partitionKey: "secretSanta",
      rowKey: crypto.randomUUID(),
      name: name,
      usrName: usrName
    };
    await getTableClient().createEntity(dataToAdd);
    
    revalidatePath("/"); // To update the page.
    console.log("Success")
    return { message: "Success" };

  } catch (e) {
    console.log("Error ", e)
    return { message: `error ${e}` };
  }
}

