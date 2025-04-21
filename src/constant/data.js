import overview from "../images/overview.svg";
import getDebtHelp from "../images/get-debt-help.svg";
import debtConsolidation from "../images/debt-consolidation.svg";
import debtSettlement from "../images/debt-settlement.svg";
import nationalDebtRelief from "../images/national-debt-relief.png";
import freedomDebtRelief from "../images/freedom-debt-relief.png";
import accreditedDebtRelief from "../images/accredited-debt-relief.png";
import unitedSettlement from "../images/united-settlement.png";

const LOGO_DATA = [
  {
    image: overview,
    text: "Overview",
  },
  {
    image: getDebtHelp,
    text: "Get Debt Help",
  },
  {
    image: debtConsolidation,
    text: "Debt Consolidation",
  },
  {
    image: debtSettlement,
    text: "Debt Settlement",
  },
];

const TABLE_DATA = [
  {
    image: nationalDebtRelief,
    name: "National Debt Relief",
    review: 4.9,
    totalReviews: "56,847 reviews",
    pickFor: "Best overall",
    minimumDebt: "$7,500",
    maximumFee: "25% of debt",
    settlementTimline: "12 to 48 months",
    yearFounded: "2009",
    isVerified: true,
  },
  {
    image: freedomDebtRelief,
    name: "Freedom Debt Relief",
    review: 4.4,
    totalReviews: "33,525 reviews",
    pickFor: "Low fees",
    minimumDebt: "$7,500",
    maximumFee: "25% of debt",
    settlementTimline: "24 to 48 months",
    yearFounded: "2002",
    isVerified: true,
  },
  {
    image: unitedSettlement,
    name: "United Settlement",
    review: 3.7,
    totalReviews: "115 reviews",
    pickFor: "Small debts",
    minimumDebt: "$5,000",
    maximumFee: "25% of debt",
    settlementTimline: "24 to 48 months",
    yearFounded: "2016",
  },
  {
    image: accreditedDebtRelief,
    name: "Accredited Debt Relief",
    review: 4.9,
    totalReviews: "2,728 reviews",
    pickFor: "Customer service",
    minimumDebt: "$10,000",
    maximumFee: "25% of debt",
    settlementTimline: "24 to 48 months",
    yearFounded: "2011",
    isVerified: true,
  },
];

export { LOGO_DATA, TABLE_DATA };
