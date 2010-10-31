﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	ReplyMessage
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Reply Message (<%= Model.Id%>) </h2>
    
    <% using (Html.BeginForm("SendMessage", "Message")) { %>
		<%: Html.AntiForgeryToken() %>
        <h3>Recierver:</h3>
        <%: Html.Hidden("PrevMessageID", (object)Model.Id)%>
		<%: Html.Hidden("To", (object)Model.Sender.Username)%>
        <%= Model.Sender.Username%>
        <h3>Original message</h3>
        <%= Model.Text%>
        <h3>Text</h3>
        <%: Html.TextArea("Text", "", 15, 50, "") %> <br />
		<input type="submit" value="Send" />
	<% } %>

</asp:Content>