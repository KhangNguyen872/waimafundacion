import './index.scss'
import MenubarLanding from '../MenubarLanding'
import { Button } from 'primereact/button'; 
import { useLocation } from 'react-router-dom';

const pdfFiles = require.context('../../assets/reportsPDF', true, /\.pdf$/); 

const Reports = () => {
    const pdfMap = {};

    const location = useLocation();
    const year = location.state?.year;

    const valuesColors = [
        "#8c458a", // Purple
        "#D9991E", // Orange
        "#9DAD2A", // Green
        "#c3b8d8", // Blue
        "#E94B3C", // Red
        "#FFD700", // Gold
        "#40E0D0", // Turquoise
        "#FF69B4", // Pink
        "#8B4513"  // Brown
    ];
    
    pdfFiles.keys().forEach((filePath) => {
        const fullPath = filePath.replace('./', ''); 
        const [yearFolder, fileName] = fullPath.split('/');

        if (!pdfMap[yearFolder]) pdfMap[yearFolder] = []; 
        pdfMap[yearFolder].push({
            name: fileName.replace('.pdf', ''), 
            url: pdfFiles(filePath)
        });
    });

    const selectedReports = pdfMap[year] || [];

    console.log(selectedReports);

    return (
        <main>
            <MenubarLanding />
            <div className='reports-container-primary'>
                <div className='reports-container-secondary'>
                    <h1>INFORMES {year}</h1>

                    <div className='reports-content-grid'>
                        {selectedReports.map((report, index) => (
                            <Button 
                                className='reports-btn' 
                                key={index} 
                                style={{ backgroundColor: valuesColors[index % valuesColors.length] }}
                                onClick={() => window.open(report.url, '_blank')}
                            >
                                <h2>{report.name}</h2>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Reports;
