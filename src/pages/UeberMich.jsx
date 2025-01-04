function UeberMich({onClick}) {
  return (
    <main className="w-full flex-grow overflow-auto bg-violet-200" onClick={onClick}>
    <section className="mx-auto max-w-4xl px-4 py-6">
        <h1 className="font-bold mb-2 px-3 py-2  bg-violet-50 drop-shadow-sm"> Über mich</h1>
        <p className="mb-2 px-3 py-2 bg-violet-50 drop-shadow-sm">
            Ich bin ein:e Ex-Mathematikstudent:in aus Berlin. Mein besonderes Interesse gilt funktionalen
            Programmiersprachen, kategorischer Logik und der Semantik von Typentheorie. Wenn du dich auf meiner Webseite umschaust, 
            kannst du Quellen, Links und Bücher zu dem Thema finden, die ich über die letzten Jahre angesammelt habe. 
        </p>
        <p className="mb-2 px-3 py-2 bg-violet-50 drop-shadow-sm">
            Gerade bin ich auf der Suche nach einem Job als Softwareentwickler:in. Ich hab das letzte Jahr geübet,
            also, wenn du Interesse hast und es mit einem sehr motiviertem Junior versuchen möchtest, schreib mir gern. Was 
            ich gerade mache, wenn ich nicht auf Jobsuche bin, ist, so viel wie möglich über Datenbanken zu lernen. Ich werde bestimmt auch ein 
            paar Blogposts dazu schreiben, wenn es sich ergibt, um meinen Lernprozess zu dokumentieren, aber das ist hier alles
            noch im entstehen.
        </p>
    </section>
    </main>
  )
}

export default UeberMich