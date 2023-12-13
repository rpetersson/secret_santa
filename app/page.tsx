"use client"
import Link from "next/link";
import { addRecordAzTable } from "./components/actions/addToDatabase";
import { dropAllEntities } from "./components/actions/dropAllEntities";
import { displayPlayers } from "./components/functions/displayPlayers";

export default function Home() {
  async function submitName() {
    //add player name to array from name_input_field
    let name = (document.getElementById("name_input_field") as HTMLInputElement)?.value;
    //add recrod to database
    addRecordAzTable(name);
    displayPlayers()
  }

  return (
    <>
      <video autoPlay muted loop id="myVideo">
      <source src="snowfall.mp4" type="video/mp4"></source>
      Your browser does not support HTML5 video.
      </video>

      <h1>Welcome to secret santa!</h1>
      <h2>Enter the names of the players below!</h2>

      <form action={submitName} className="flex flex-col items-center justify-between">
        <input className="text-black" type="text" placeholder="Name" id="name_input_field"></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lägg till!</button>
      </form>
      
      <p>Players:</p>
      <div className='players'>
        <ul id='player_list'>

        </ul>
      </div>
      <Link className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded" href="/generate">GoGo Secret santa -{">"}</Link>

      <form action={dropAllEntities}>
        <button className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded" >Ta bort alla namn!</button>
      </form>
      </>
  )
}
