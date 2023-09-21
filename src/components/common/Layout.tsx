import Tab from '@/components/common/Tab';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Tab />
            <div>{children}</div>
        </div>
    );
}

export default Layout;
