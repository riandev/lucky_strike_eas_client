import React from "react";
import Qc from "../../Qc/Qc";
import Reports from "../../Reports/Reports";
import LeadGenerate from "../LeadGenerate/LeadGenerate";
import UploadLead from "../UploadLead/UploadLead";
import DeleteLeads from "./../DeleteLeads/DeleteLeads";

const routesadmin = [
  {
    path: "/admin/uploadLead",
    exact: true,
    name: "Upload Lead",
    toolbar: () => <p>Upload Lead For Call</p>,
    main: () => <UploadLead />,
  },
  {
    path: "/admin/cep",
    exact: true,
    name: "Call QC",
    toolbar: () => <p>Call QC</p>,
    main: () => <Qc />,
  },
  {
    path: "/admin/export",
    exact: true,
    name: "Export CRM",
    toolbar: () => <p>Export Survey</p>,
    main: () => <Reports />,
  },
  {
    path: "/admin/delete",
    exact: true,
    name: "Delete Lead",
    toolbar: () => <p>Delete All Lead</p>,
    main: () => <DeleteLeads />,
  },
  {
    path: "/admin/addLead",
    exact: true,
    name: "Generate Lead",
    toolbar: () => <p>Delete All Lead</p>,
    main: () => <LeadGenerate />,
  },
];

export default routesadmin;
