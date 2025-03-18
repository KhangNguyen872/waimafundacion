import './index.scss'
import MenubarLanding from '../MenubarLanding'
import { Button } from 'primereact/button'; 
import { useNavigate } from 'react-router-dom';

export default function Reports () {
    const navigate = useNavigate();

    const testVar = [
        "report 1", "report 2", "report 3", "report 4", "report 5"
    ]


    return (
        <main>
            <MenubarLanding />
            <div className='reports-container-primary'>
                <div className='reports-container-secondary'>
                    <h1>Reports</h1>
                    <div className='reports-content-grid'>
                        {testVar.map((report, index) => {
                            return (
                                <Button className='reports-btn' key={index} onClick={() => navigate(`/your-path/${report}`)}>
                                    <h2>{report}</h2>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
