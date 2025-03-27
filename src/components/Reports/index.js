import './index.scss'
import MenubarLanding from '../MenubarLanding'
import { Button } from 'primereact/button'; 
import { useLocation } from 'react-router-dom';

const pdfFiles = require.context('../../assets/reportsPDF', true, /\.pdf$/); // 'true' enables recursive search

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
    
    // Create a map of folders (2017-2021) to their PDF files
    pdfFiles.keys().forEach((filePath) => {
        const fullPath = filePath.replace('./', ''); // Remove './'
        const [yearFolder, fileName] = fullPath.split('/'); // Get folder (year) and filename

        if (!pdfMap[yearFolder]) pdfMap[yearFolder] = []; // Create an array if it doesn't exist
        pdfMap[yearFolder].push({
            name: fileName.replace('.pdf', ''), // Save the file name without extension
            url: pdfFiles(filePath)
        });
    });

    // Get the selected year's reports
    const selectedReports = pdfMap[year] || [];

    console.log(selectedReports);

    return (
        <main>
            <MenubarLanding />
            <div className='reports-container-primary'>
                <div className='reports-container-secondary'>
                    <h1>Reports for {year}</h1>

                    {/* Display PDFs for the selected year */}
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
