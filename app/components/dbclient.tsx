
import { TableClient, AzureSASCredential } from "@azure/data-tables";

export function getTableClient() {
  const account = "secretsantarp";
  const tableName = "secretsanta";

  const sas = process.env.SAS_TOKEN as string;
  const dbClient = new TableClient(
    `https://${account}.table.core.windows.net`, tableName,
    new AzureSASCredential(sas)
  );

  return dbClient;
}
