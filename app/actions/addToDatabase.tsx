"use server";
import { revalidatePath } from "next/cache";
import { dbClient } from "../dbclient";
import { randomWordsFunction } from "../functions/randomWord";

export async function addRecordAzTable(prevState: any, name: string) {
  let usrName = randomWordsFunction();
  try {
    const dataToAdd = {
      partitionKey: "secretSanta",
      rowKey: crypto.randomUUID(),
      name: name,
      usrName: usrName
    };
    await dbClient.createEntity(dataToAdd);
    revalidatePath("/"); // To update the page.
    console.log("Success")
    return { message: "Success" };

  } catch (e) {
    console.log("Error ", e)
    return { message: `error ${e}` };
  }
}

