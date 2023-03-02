import { Nunito } from "@next/font/google"
import { ReactNode } from "react";
import Image from "next/image";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

const nunito = Nunito({
    weight: ['300','500','600','800'],
    subsets: ["latin"],
    variable: '--font-nunito',
})

interface LayoutProps extends React.HTMLAttributes<Element>{
    children?: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const [colorTheme, setTheme] = useThemeSwitcher();

    return(
        <div className={`${nunito.className} w-full h-auto m-auto text-very-dark-blue-text dark:text-White`}>
            <header className="w-full h-fit m-auto shadow-lg bg-White dark:bg-dark-blue">
                <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center">
                    <div className="w-11/12 py-7 sm:py-5 flex flex-row justify-between items-center text-sm sm:text-base">
                        <h1 className="text-lg xs:text-xl sm:text-3xl font-extrabold">Where in the world?</h1>

                        {colorTheme === "dark" ? (
                            <div onClick={() => setTheme("dark")}  className="flex justify-center items-center gap-2 cursor-pointer">    
                                <Image src={'/assets/moon-icon.svg'} alt='moon icon' width={18} height={18}/>
                                <p className="font-semibold">Dark Mode</p>   
                            </div>
                        ) : (
                            <div onClick={() => setTheme("light")} className="flex justify-center items-center gap-2 cursor-pointer">    
                                <Image className="w-[16px] xs:w-[20px] h-[16px] xs:h-[20px]" src={'/assets/sun.png'} alt='moon icon' width={18} height={18}/>
                                <p className="font-medium">Light Mode</p>
                            </div>
                        )}
                       
                    </div>
                </div>
            </header>
            {children}
        </div>
    )
}

export default Layout