import Aside from "../components/Aside";
import Header from "../components/Header";

export default function LayoutDashBoard({children}: {children: React.ReactNode}) {
        
    
    return(
        <>
            <div className="flex max-h-[1200px] mx-center border h-screnn max-w-[2400px]">
                <div className="relative  w-36">
                    <Aside />
                </div>
                <div className="flex w-full flex-col">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}