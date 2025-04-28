// filepath: /Users/allisongattone/Desktop/artcurator/artful-curator/src/services/exportService.js
export const exportToCSV = (data, filename = "export.csv") => {
    const csv = [
      Object.keys(data[0]).join(","),
      ...data.map(row => Object.values(row).join(","))
    ].join("\n");
  
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };