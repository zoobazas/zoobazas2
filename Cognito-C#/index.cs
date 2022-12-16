using System;
using System.IO;
using System.Net;
using System.Text;

namespace PostRequest
{
  class Program
  {
    static void Main(string[] args)
    {
      WebRequest wRequest = WebRequest.Create("https://3bd3af9o6a.execute-api.us-east-1.amazonaws.com/p/js");
      wRequest.Method = "POST";
      string postString = "{'jan1':'1234567ABCDEF','rank':'1'}";
      byte[] bArray = Encoding.UTF8.GetBytes(postString);
      webRequest.ContentType = "text/plain";
      webRequest.Headers.Add("Authorization", "id token");

      wRequest.ContentLength = bArray.Length;
      Stream webData = wRequest.GetRequestStream();
      webData.Write(bArray, 0, bArray.Length);
      webData.Close();
      WebResponse webResponse = wRequest.GetResponse();
      Console.WriteLine(((HttpWebResponse)webResponse).StatusDescription);
      webData = webResponse.GetResponseStream();
      StreamReader reader = new StreamReader(webData);
      string responseFromServer = reader.ReadToEnd();
      Console.WriteLine(responseFromServer);
      reader.Close();
      webData.Close();
      webResponse.Close();
      Console.ReadKey();
    }
  }
}