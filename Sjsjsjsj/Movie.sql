CREATE TABLE [dbo].[Movie]
(
  Movie_ID int(20), 
  category VARCHAR(50),
  Title varchar(50), 
  [Description] varchar(100), 
  DateLaunched date(10),
   Origin VARCHAR (30)
)

INSERT INTO Movie (Movie_ID, Category,  Title, [Description], DateLaunched, Origin)
VALUES
(1, 'Horror', 'Real Ninjas', 'Good movie. Many lesson to learn', 'April 20, 2001', 'Nigeria'),
(2, 'Comedy', 'Duo Leveling', 'Funny movie', 'January 10, 2011', 'USA'),
(3, 'Action', 'The black man', 'Good to watch with family', 'November 09, 2009', 'Nigeria'),
(4, 'Horror', 'The black woman', 'Feel the intense fear', 'October 10, 2003', 'Philippines'),
(5, 'Comedy', 'The black children of the white couple', 'White couples having black children? How will they solve this mystery?', 'February 05, 2024','USA')