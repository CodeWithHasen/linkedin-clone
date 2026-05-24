import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

const MainLayout = () => {
    return(
        <>
            <Header />

            <main className="main-layout">
                <div className="container py-4">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;