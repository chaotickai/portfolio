-- ### The following query is used to list employees, their 
--     managers and their departmental managers. The query 
--     does not provide correct results. It is showing a 
--     bunch of non-existent employees in the results table.  
--     Can you please rewrite it to provide correct data:

SELECT 
   e.first_name || ' ' || e.last_name as "Employee",
   m.first_name || ' ' || m.last_name as "Emp Manager",
   d.department_name as "Department",
   dm.first_name || ' ' || dm.last_name as "Dept Manager"
FROM employees e
LEFT JOIN employees m ON (m.employee_id = e.manager_id)
LEFT JOIN departments d ON (e.department_id = d.department_id)
LEFT JOIN employees dm ON (d.manager_id = dm.employee_id);


SELECT 
   e.first_name || ' ' || e.last_name as "Employee",
   d.department_name as "Department"
FROM departments d RIGHT JOIN employees e 
USING (department_id);


SELECT * FROM Employees;


LIST ALL Employees
AND their
CITIES.