import { useNavigate } from "react-router-dom";
import ReportingDashBoard from "../components/ReportingDashBoard"

function ReportPage(){
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("authToken");
        navigate("/");
    }
    return(
        <div style={{height:"100vw"}}>
            <div className="dashboard-container" >
                <div className="dashboard-buttons">
                    <button onClick={() => navigate('/dashboard')} className="dashboard-button">Dashboard</button>
                    <button onClick={() => navigate('/product')} className="dashboard-button">Products</button>
                    <button onClick={() => navigate('/Suppliers')} className="dashboard-button">Suppliers</button>
                    <button onClick={() => navigate('/orders')} className="dashboard-button">Orders</button>
                    <button onClick={() => navigate('/reports')} className="dashboard-button">Reports</button>
                </div>
                <h1 className="dashboard-title" style={{ margin: "50px auto -30px auto" }}>Report Details</h1>
                <button className='logout' onClick={handleLogout}>Logout</button>
                <hr />
                <div className="reports-container">
                <div className="ReportingDashBoard-container">
                    <ReportingDashBoard/>
                </div>
                
                </div>
               
            </div>
        </div>
    )
}

export default ReportPage;