package com.Auctiondepot;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/login")

public class Login extends HttpServlet{
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String username= req.getParameter("username");
		String password= req.getParameter("password");
		
		PrintWriter out=resp.getWriter();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/auctiondepot","root","root");
			PreparedStatement ps=con.prepareStatement("select * from signup where email=? and pass=?");
			
			ps.setString(1, username);
			ps.setString(2, password);
			
			ResultSet rs=ps.executeQuery();
			if(rs.next()) {
				RequestDispatcher rd=req.getRequestDispatcher("/home.html");
				rd.include(req, resp);
			}
			else {
				resp.setContentType("text/html");
				out.print("<h2>Wrong Username and Password , Try again! </h2>");
				RequestDispatcher rd=req.getRequestDispatcher("/login.html");
				rd.include(req, resp);
				
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			out.print("<h2>"+e.getMessage()+" </h2>");
			RequestDispatcher rd=req.getRequestDispatcher("/login.html");
			rd.include(req, resp);
		}
	
	}
}
