﻿<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<dynamic>" %>

<ul id="menu">
	<% if (Request.IsAuthenticated)
	{ %>
		<li><%= Html.ActionLink("Wall", "Index", "Wall", null, new { id = "wall-link" }) %></li>
		<li><%= Html.ActionLink("My profile", "Index", "Profile", new { username = Page.User.Identity.Name }, null)%></li>
		<li><%= Html.ActionLink("Messages", "Index", "Message", new { page = 1 }, null)%></li>
	<% }
	else
	{ %>
		<li><%= Html.ActionLink("TestData", "TestData", "Home")%></li>
	<% } %>
	<li><%= Html.ActionLink("Groups", "Find", "Group")%></li>
</ul>