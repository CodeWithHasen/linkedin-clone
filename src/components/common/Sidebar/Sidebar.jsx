
const Sidebar = () => {
    return(
        <div className="sidebar card p-3 mt-4">
            <img
                src="https://i.pravatar.cc/150"
                alt="user"
                className="rounded-circle mx-auto"
                width="90"
            />
            <h5 className="text-center mt-3">Hasen Ali</h5>
            <p className="text-center text-muted">Full Stack Developer</p>
        </div>
    );
};

export default Sidebar;