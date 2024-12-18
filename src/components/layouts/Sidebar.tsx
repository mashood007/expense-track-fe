import Link from "next/link";

const Sidebar = () => {

  return (
    <aside className="relative hidden h-screen w-72 border-r pt-16 lg:block 2xl:border-l">
      <ul>
        <li className="px-3 py-2 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground">
          <Link href="/dashboard">
            <div className="block px-4 py-2 rounded hover:bg-gray-200">Dashboard</div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground">
          <Link href="/stores">
            <div className="block px-4 py-2 rounded hover:bg-gray-200">Stores</div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground">
          <Link href="/transactions">
            <div className="block px-4 py-2 rounded hover:bg-gray-200">Transactions</div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground">
          <Link href="/transactions">
            <div className="block px-4 py-2 rounded hover:bg-gray-200">Categories</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
