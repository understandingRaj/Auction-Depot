package com.Auctiondepot;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/Signup")
public class Signup extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String pass = req.getParameter("pass");
		String contact = req.getParameter("contact");
		PrintWriter out=resp.getWriter();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/auctiondepot", "root", "root");

			
			
			PreparedStatement ps = con.prepareStatement("insert into signup values(?,?,?,?)");
			ps.setString(1, name);
			ps.setString(2, email);
			ps.setString(3, pass);
			ps.setString(4, contact);
			int count=ps.executeUpdate();
			if (count>0) {
				RequestDispatcher rd=req.getRequestDispatcher("login.html");
				rd.include(req, resp);
			}
			else {
				resp.setContentType("text/html");
				out.print("<h3>Try Again ,not registered </h3>");
				RequestDispatcher rd=req.getRequestDispatcher("index.html");
				rd.include(req, resp);
			}
		} catch (Exception e) {
			out.print("<h1>"+e.getMessage()+"</h1>");
		}
		
	}

}
