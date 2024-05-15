package com.Auctiondepot;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/Contactdb")
public class Contactdb extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String subject = req.getParameter("subject");
		String message = req.getParameter("message");
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/auctiondepot", "root", "root");
			PreparedStatement ps = con.prepareStatement("insert into contact values(?,?,?,?)");
			ps.setString(1, name);
			ps.setString(2, email);
			ps.setString(3, subject);
			ps.setString(4, message);

			int i = ps.executeUpdate();

			if (i > 0) {
				RequestDispatcher rd = req.getRequestDispatcher("home.html");
				rd.include(req, resp);
			} else {
				RequestDispatcher rd = req.getRequestDispatcher("home.html");
				rd.include(req, resp);

			}

		} catch (Exception e) {
			// TODO: handle exception
		}

	}

}
