// Copyright (c) 2024, Victor and contributors
// For license information, please see license.txt

frappe.query_reports["Revenue by Make"] = {
	"filters": [
		{
			"fieldname": "myfilter",
			"label": "My filter",
			"fieldtype": "Link",
			"options": "Vehicle",
		}

	]
};