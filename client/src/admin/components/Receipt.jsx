import React from 'react'
import { Button } from '@mui/material'
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
const Receipt = ({fee}) => {
    const formatCurrency=(amount)=>{
        return "Rs. "+Number(amount).toLocaleString("en-IN");
        // return new Intl.NumberFormat("en-IN",{
        //     style:"currency",
        //     currency:"INR",
        //     maximumFractionDigits:0,
        // }).format(amount);
    };
    const downloadReceipt=()=>{
        const doc=new jsPDF();
        doc.setFontSize(20);
        doc.setTextColor(25,118,210);
        doc.text("CampusNova",105,18,{align:"center"});

        doc.setFontSize(14);
        doc.setTextColor(0,0,0);
        doc.text("Fee Payment Receipt ",105,28,{align:'center'});
        doc.setFontSize(11);
        doc.text(`Receipt No:REC-${fee._id.slice(-6).toUpperCase()}`,14,42);
        doc.text(`Date:${new Date().toLocaleDateString()}`,150,42);
        autoTable(doc,{
            startY:50,
            head:[["Field","Value"]],
            body:[
                
                ["Student Name",fee.studentId?.userId?.name||""],
                ["Roll No",fee.studentId?.rollNo || ""],
                ["Class:",fee.studentId?.className || ""],
                ["Section:",fee.studentId?.section || ""],
                ["Fee Category:",fee.feeCategory || ""],
                ["Total Fee:",formatCurrency(fee.totalFees) || ""],
                ["Paid:",formatCurrency(fee.paidAmount )|| ""],
                ["Due:",formatCurrency(fee.dueAmount) || ""],
                ["Status:",fee.status || ""],
            ],
        });
        const y=doc.lastAutoTable.finalY+20;
        doc.text(
            `Payment Method: ${
                fee?.paymentHistory?.length?fee.paymentHistory[fee.paymentHistory.length-
                    1].paymentMode
                :"N/A"}`,14,y);
        doc.text("Authorized Signature",140,y+20);
        doc.text("Thank you for your payment",14,y+35);
        doc.save(`Receipt-${fee.studentId?.userId?.name}.pdf`);
    };
  return (
    <Button varaint="contained" color="secondary" size="small" onClick={downloadReceipt}>
      Receipt
    </Button>
  )
}

export default Receipt
