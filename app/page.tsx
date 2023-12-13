"use client"
import Link from "next/link";
import { useFormState } from "react-dom";
import { addRecordAzTable } from "./actions/addToDatabase";
import { init } from "next/dist/compiled/webpack/webpack";


let initialState = { message: "" };

export default function Home() {
  let playerNames: string[] = [];
  //return html form that lets users enter their name
  function submitName() {
    //add player name to array from name_input_field
    let name = (document.getElementById("name_input_field") as HTMLInputElement)?.value;
    //add name to array
    playerNames.push(name);
    console.log("Name: " + name)
    console.log("Player Names array: "+ playerNames)
    //add player name to ul id playe_list
    let listItem = document.createElement('li');
    listItem.innerHTML = name;
    let playersList = document.getElementById('player_list') as HTMLLIElement;
    playersList.appendChild(listItem);

    //add recrod to database
    addRecordAzTable(initialState, name);
  }

  //add form data to database
  const [state, formAction] = useFormState(addRecordAzTable, initialState);
  console.log(state?.message)

  return (
    <main className="flex flex-col items-center justify-between space-y-4">
      <h1>Welcome to secret santa!</h1>
      <p>Enter the names of the players below!</p>
      <form action={formAction} className="flex flex-col items-center justify-between">
        <input className="text-black" type="text" placeholder="Name" id="name_input_field"></input>
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submitName}>Submit</button>
      <p>Players:</p>
      <div className='players'>
        <ul id='player_list'>
        </ul>
      </div>
      <Link className="py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded" href="/generate">GoGo Secret santa</Link>
    </main>
  )
}
