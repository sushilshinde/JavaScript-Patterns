<% 
String chapter = request.getParameter("chapter");

String tpl = " This is chapter " + chapter +" This is chapter " + chapter +" This is chapter " + chapter +" This is chapter " + chapter +" This is chapter " + chapter ; 
StringBuilder textContext = new StringBuilder();

Thread.sleep(500);
for(int i = 0; i < 2 ; i++){
	textContext.append(tpl + "<br>" );
}




out.print(textContext.toString());

%>