import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return (
        <div className="h-[100vh] grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar/>
            </div>
            <div className="col-span-10">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;