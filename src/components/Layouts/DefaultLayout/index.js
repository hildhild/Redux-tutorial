import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return (
        <div className="h-[100vh] grid grid-cols-12">
            <div className="col-span-2">
                <Sidebar pageType={children.type.name}/>
            </div>
            <div className="col-span-10">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;