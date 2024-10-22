# insert , update, delete
insert_query = "insert into student values(104, 'kim')"
update_query="update student set sname = 'mary' where sid=104;"
delete_query="delete from student where sid = 104"

import mysql.connector
try:
   con = mysql.connector.connect(host="localhost",port=3306,user="root",passwd="root",database="mydb")
   curs=con.cursor()
   curs.execute("insert into student values(104,'Kim')")# execute query through cursor
   # curs.execute(delete_query) #execute query through cursor
   con.commit()#commmit transaction
   con.close()
except:
   print("connection unsuccessful...")

print("finished.....")


#Another way work with the select command

import mysql.connector

try:
   con = mysql.connector.connect(host="localhost", port=3306, user="root", passwd="root", database="mydb")
   curs = con.cursor() # create cursor
   curs.execute("select * from orders")  # execute query through cursor

   for row in curs:
      print(row[0],row[1],row[2])

   con.close() # close connection
except:
   print("connection unsuccessful...")

print("finished...")