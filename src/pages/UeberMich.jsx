function UeberMich({ onClick }) {
  return (
    <main
      className="w-full flex-grow overflow-auto bg-indigo-50"
      onClick={onClick}
    >
      <div className="mx-auto max-w-4xl px-4 py-6">
        <section className="bg-white px-6 py-3">
          <h1 className="mb-4 font-bold">Über mich</h1>
          <p className="mb-2">
            Ich bin ein:e Ex-Mathematikstudent:in aus Berlin. Mein besonderes
            Interesse gilt funktionalen Programmiersprachen, kategorischer Logik
            und der Semantik von Typentheorie. Wenn du dich auf meiner Webseite
            umschaust, kannst du Quellen, Links und Bücher zu dem Thema finden,
            die ich über die letzten Jahre angesammelt habe.
          </p>
          <p>
            Gerade bin ich auf der Suche nach einem Job als
            Softwareentwickler:in. Ich hab das letzte Jahr geübet, also, wenn du
            Interesse hast und es mit einem sehr motiviertem Junior versuchen
            möchtest, schreib mir gern. Was ich gerade mache, wenn ich nicht auf
            Jobsuche bin, ist, so viel wie möglich über Datenbanken zu lernen.
            Ich werde bestimmt auch ein paar Blogposts dazu schreiben, wenn es
            sich ergibt, um meinen Lernprozess zu dokumentieren, aber das ist
            hier alles noch im entstehen.
          </p>
        </section>
      </div>
    </main>
  );
}

export default UeberMich;
