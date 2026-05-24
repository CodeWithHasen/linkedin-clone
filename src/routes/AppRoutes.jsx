import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Network from '../pages/Network/Network';
import Jobs from '../pages/Jobs/Jobs';
import Messages from '../pages/Messages/Messages';
import Notifications from '../pages/Notifications/Notifications';

import Settings from '../pages/Settings/Settings';
import Help from '../pages/Help/Help';
import Language from '../pages/Language/Language';
import PostActivity from '../pages/PostActivity/PostActivity';
import JobPosting from '../pages/JobPosting/JobPosting';
import Business from '../pages/Business/Business';
import Premium from '../pages/Premium/Premium';
import NotFound from '../pages/NotFound/NotFound';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';




const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="network" element={<Network />} />
                    <Route path="jobs" element={<Jobs />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} />
                    <Route path="language" element={<Language />} />
                    <Route path="post" element={<PostActivity />} />
                    <Route path="job" element={<JobPosting />} />
                    <Route path="business" element={<Business />} />
                    <Route path="premium" element={<Premium />} />

                </Route>
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;