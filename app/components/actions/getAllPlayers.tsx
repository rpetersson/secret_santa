"use server"
import { getTableClient } from "../dbclient";

export async function getPlayers() {
    let players: string[] = [];
    try {
      let entitiesIterable = getTableClient().listEntities();

      for await (const entity of entitiesIterable) {
        players.push({name: entity.name, usrName: entity.usrName});
      }

      console.log("Success")
    } catch (e) {
      console.log("Error ", e)
    }
    //console.log(players)
    return players
  }
  
  