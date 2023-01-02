import { sap,accountant,accrecv, ledger, acc, payroll,  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: acc,
    title: "Accounts Payable",
    content:
      "Handling money owed by your business to its suppliers shown as a liability.",
  },
  {
    id: "feature-2",
    icon: sap,
    title: "SAP FI Implementation and support",
    content:
      "Diverse accounting tasks such as maintaining ledgers, balance sheets, and profit and loss statements etc.",
  },
  {
    id: "feature-3",
    icon: ledger,
    title: "General Ledger Accounting",
    content:
      "A record-keeping system for your company's financial data, with debit and credit account records validated by a trial balance.",
  },
  {
    id: "feature-4",
    icon: accrecv,
    title: "Account Receivable Service",
    content:
      "To seamlessly deal with your financial matters such as accounting, to generate cash-flow.",
  },
  {
    id: "feature-5",
    icon: payroll,
    title: "Payroll Service",
    content:
      "Supporting the process of paying salary, year-end taxes etc to a your employees.",
  },
  {
    id: "feature-6",
    icon: accountant,
    title: "Accounting Services",
    content:
      "Experts opinion on general accounting services to your companies needs.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Best service I have ever gotten. Took care of my billion dollar company",
    name: "Oilesh B.",
    title: "Founder of NPAT Tech",
  },
  {
    id: "feedback-2",
    content:
      "Thier SAP experts helped my company to undeclare bankruptcy",
    name: "Fernandez D'Souza",
    title: "Private Investigator",
  },
  {
    id: "feedback-3",
    content:
      "’itan even helped the accounts of the Swotu Ngay and Vitraya Ramunong.",
    name: "Toruk Makto",
    title: "Leonopteryx manager",
  },
];