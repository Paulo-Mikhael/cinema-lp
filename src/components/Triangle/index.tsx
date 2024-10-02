export default function Triangle() {
  return (
    <svg
      width="45"
      height="39"
      viewBox="0 0 45 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="size-4"
    >
      <title>Triangle</title>
      <rect
        x="45"
        y="39"
        width="45"
        height="39"
        transform="rotate(-180 45 39)"
        fill="url(#pattern0_40_45)"
      />
      <defs>
        <pattern
          id="pattern0_40_45"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_40_45"
            transform="matrix(0.00577778 0 0 0.00666667 -0.00266667 0)"
          />
        </pattern>
        <image
          id="image0_40_45"
          width="174"
          height="150"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACWCAYAAABHJbMuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbrSURBVHgB7d3tcRRHEMbx3pUCuBAOOYGzSUDOAEcAGeAMIAOF4BD0QQHYGZgMrBCIgPPssZZ1x+7N7s5b98z/V0VBIQqqoKvZeW66VwTJPO4PH9y3e0F0t4Jk+r77NP7wjSCqXpDE093bj+67/fDt8e7wWRBVJ4jOPR7sXbf9U74X7uDrt2/HN789f/kqiIKOm0DX98Mjwv7VT+1uvv8cIqHjRjZ223+mvua67q+u6/4lCEbHjeym6/648jW6biQUbkRD/HXs5H7u68PX3K95JwhG4Ub0Kv669mseXPHuBEEo3Eie7n65PJDN2bu/9d8FQTicRTAeyP52P1zaSYd47Gd3UHsWbELHjWCMv9b89088FoiOG+ha/OVDPLYdHTfQ+AnZJsRj21G4AYb4S5YdyCad4rGfTr8HVuJRYaMh0hoPZHsJwz2GDei4G932/X+3v0LtiMfWo+NuEHIgm0E8thIdd4MufpS1u3bHAT+i46403DVw3fZREiAeW46Ou9Jw10AS6bt0v3dtKNwVQuMvr04Oj3cHDmoL8Kiw0MQ4TirEYwvQcReaGMdJhXsMC9BxF0gQf3mNXfdZMImOu0BXoAMSj11H4XoMB7JOjh8ks3HM514wicL1WDKOk/DPpuvOoHCvWDGOkwpbcGZwOJuRMf7yIR6bQMedkTH+8iEem0DHnVAi/vLhHsM5Ou6EvktziSYEYz7nKNwLp/sInRxEGbbgnKNwL5SMv3zYgvM/CvcVBfGXD1twRhzORhoPZDMY8xE67ovOTuREPCZ03BPXbQ/jqLkZrcdjdFw5HXrUxV8+rcdjzRdu8nGcRE7xWMNjPk0/Kii6j7BVs/cYmu64t33/XuwW7aDZLTjNdlxD8ZdPk/FYsx3XUPzl0+QWnCY7bsptNKW0Fo812XFTbqMppbUtOM0VrtX4y6uxLThNPSpUEH/5NBOPNdVxFY3jpNLMPYZmOm5F8ZfXGI99kYo103FdJ2rm8HLTwEGticI9vRxajs2MvbSwBaeJwtU8jpPKsAWn5jGf6gvXwDhOKlWP+VR9OGsg/vKpNh6ruuM2EH/57Go9lFbbcVuKv3xqvMdQbcfVuI2mlBrHfKosXK3baEqp8WXXVRZui/GXT3/sPtUUj1VXuA3HXz5VxWNVHc44kHlVM+ZTVcetaBwnlWrisWo6rsVtNKXUEI9V03FrmyFLqYZ4rIrCrXYcJ5EatuCYf1TgPsJmpu8xmO+47rDxUSjaLUxvwTHdcYm/wll92bXpjkv8Fc7qFhyzhVvq5dC1sTrmY7ZwuY8Qj8WXXZssXOKv6PbW4jFzhzPir2RMxWPmOi7jOMmY2oJjquMSf6VnZQuOqY7b4gLj3KxswTFTuKdtNC66ESRlJR4zU7jEX/lY2IJjonAZx8lO/ZiP+sPZeCAbLojzuvu8VMdj6jvuGH9RtPmpHvNR3XGJv8rTOuajuuOOn5ChIK1jPmoLl/sIOmjdgqPyUWGIYsYD2V6ggbqDmsqOe8s4jjbqxnzUdVwOZGqp2oKjruMyjqOWqpddq+q4w2fkJAm6aYnHVHVciyMkrdESj6kpXOIvG7RswVHxqMA4jjnF4zEVHZdtNOYUj8eKd1ziL7tKbsEp3nGJv+wqGY8VLVy20dhWcsynaOEyjmNfqQizWOE+3b3lQFaHYQvOZ8msyOGM+Ks62eOxIh2XbTTVyb4FJ3vHJf6qV857DNk7Ltto6pXzHkPWwmUbTd3GeOydZJC1cIm/6uf+jR9ybMHJVrhso2lGli04WQ5nbKNpTvIxnywdl200zUkejyXvuMRf7UoZjyXvuMyQtStlPJa0cBnHaVvKLTjJHhXYRoNRknsMyTou22gwSjLmk6TjciDDhejxWJKOyzgOLkTfghO94w6fVbtu+yjAhZjxWPSOO3xWLcCEPuI71KIWLvEXrurkEGsLTrRHBcZxsFCUeCxax2UcBwtFuccQpeMSf2Gt0C04UTqu5vdhQafQeCy4cE/jOHLMMq6BeoRuwQkuXMZxsFXIFpygwmUcB4E2b8HZfDgj/kIkm+KxzR2X+AuRbIrHNnVc4i/EtvYew6aO6z5z5hINolo75rO6cE/3EdxnzgJEtHYLzurCJf5CKmu24KwqXOIvJLZ4C87iwxkHMmSyaMxnccdlHAeZ7JbcfVnUcV23PYyj5kAWvnhsUcdlhgy5+eIxb+EyjoMSfC+7vvqowH0EFDZ7j+Fqx73t+/dC0aKc2S04sx2X+AtKTMZjsx2X+AtKTG7Bmey4bKOBNpfx2GTHZRsNtLkc8/mhcIm/oNT+dTx29qhA/AXlXuKxs47LOA6Uexnzeem4xF+wYojHXjou22hghYvHHk4ddziQhSxnAHL7F4+Jie87ucSFAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
