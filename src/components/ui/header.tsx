import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export default function Header() {
    return (
        <Card className="flex items-center justify-between p-[1.875rem]">
            <Sheet>
            <SheetTrigger asChild>
                 <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
            </SheetTrigger>
           <SheetContent side="left">
                <SheetHeader className="text-left text-lg font-semibold">
                    Menu
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-2">

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16}/>
                        Fazer Login
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16}/>
                        Início
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <PercentIcon size={16}/>
                        Ofertas
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16}/>
                        Catálogo
                    </Button>
                </div>
           </SheetContent>

            <h1 className="font-semibold text-lg "><span className="text-primary">FSW</span> Store</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
            </Sheet>
        </Card>
    )
}