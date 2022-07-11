import { Engine } from "@prisma/client/runtime"
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"
import { trpc } from "../utils/trpc"

const array = [
    "rotate-[0deg]",
    "rotate-[45deg]",
    "rotate-[90deg]",
    "rotate-[135deg]",
    "rotate-[180deg]",
    "rotate-[225deg]",
    "rotate-[270deg]",
    "rotate-[315deg]",
]

function Chocolovers() {
    const [orientation, setOrientation] = useState(0)
    const chocolateMilkMutation = trpc.useMutation("chocolatemilk.new");
    const chocolateMilks = trpc.useQuery(["chocolatemilk.getAll", { input: {} }])
    console.log(chocolateMilks)
    function handleRoll() {
        setOrientation((oldOrientation) => ((oldOrientation + 45) % 360))
    }
    function handleClick() {
        chocolateMilkMutation.mutate({ location: "FlatIron", name: "CocoaLacto", });
    }
    return (
        <>
            <div className={`text-center text-red-500 text-[100px] -z-50 rotate-[${orientation}deg]`}>Acronym</div>
            <div className="flex justify-center">
                <button className="bg-slate-500 w-40 z-50 text-white rounded-md p-4" onClick={handleRoll}>Roll Over</button>
            </div>
            <div className="flex justify-center">
                <button className="bg-slate-500 w-40 z-50 text-white rounded-md p-4 m-5" onClick={handleClick}>Add Chocolate Milk</button>
            </div>
            <div className="flex justify-center">
                <div>
                    {/* <thead>
                        <tr>
                            <td className="w-40">
                                NAME
                            </td>
                            <td>
                                LOCATION
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {chocolateMilks.data.map((cm) => (
                            <tr>
                                <td>
                                    {cm.name}
                                </td>
                                <td>
                                    {cm.location}
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </div>
            </div>
        </>
    )
}

export default Chocolovers