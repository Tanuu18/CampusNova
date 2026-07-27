const fees = [
  {
    studentId: 1,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 15000,
    dueAmount: 40000,
    status: "Partial",
    paymentHistory: [
      {
        date: "10 Jul 2026",
        amount: 10000,
        mode: "UPI",
        remark: "First Installment"
      },
      {
        date: "25 Jul 2026",
        amount: 5000,
        mode: "Cash",
        remark: "Second Installment"
      }
    ]
  },

  {
    studentId: 2,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 55000,
    dueAmount: 0,
    status: "Paid",
    paymentHistory: [
      {
        date: "05 Jul 2026",
        amount: 55000,
        mode: "Net Banking",
        remark: "Full Payment"
      }
    ]
  },

  {
    studentId: 3,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 25000,
    dueAmount: 30000,
    status: "Partial",
    paymentHistory: [
      {
        date: "08 Jul 2026",
        amount: 25000,
        mode: "UPI",
        remark: "First Installment"
      }
    ]
  },

  {
    studentId: 4,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 0,
    dueAmount: 55000,
    status: "Unpaid",
    paymentHistory: []
  },

  {
    studentId: 5,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 30000,
    dueAmount: 25000,
    status: "Partial",
    paymentHistory: [
      {
        date: "12 Jul 2026",
        amount: 30000,
        mode: "Debit Card",
        remark: "Semester Fee"
      }
    ]
  },

  {
    studentId: 6,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 55000,
    dueAmount: 0,
    status: "Paid",
    paymentHistory: [
      {
        date: "02 Jul 2026",
        amount: 55000,
        mode: "UPI",
        remark: "Complete Payment"
      }
    ]
  },

  {
    studentId: 7,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 10000,
    dueAmount: 45000,
    status: "Partial",
    paymentHistory: [
      {
        date: "18 Jul 2026",
        amount: 10000,
        mode: "Cash",
        remark: "Advance Payment"
      }
    ]
  },

  {
    studentId: 8,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 55000,
    dueAmount: 0,
    status: "Paid",
    paymentHistory: [
      {
        date: "01 Jul 2026",
        amount: 55000,
        mode: "Net Banking",
        remark: "Annual Fee"
      }
    ]
  },

  {
    studentId: 9,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 20000,
    dueAmount: 35000,
    status: "Partial",
    paymentHistory: [
      {
        date: "15 Jul 2026",
        amount: 20000,
        mode: "UPI",
        remark: "First Installment"
      }
    ]
  },

  {
    studentId: 10,
    academicYear: "2026-27",
    feeCategory: "Tuition Fee",
    totalFees: 55000,
    paidAmount: 0,
    dueAmount: 55000,
    status: "Unpaid",
    paymentHistory: []
  }
];

export default fees;