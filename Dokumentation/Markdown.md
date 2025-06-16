# Dokumentation mit Markdown

Markdown ist eine Skriptsprache zur Dokumentation technischer Projekte.
Sie unterstützt besondere Syntax zum Hervorheben von Textabschnitten, Tabellen, Aufzählungen und URLs.
Ein Interpreter kann Markdown-Dokumente lesen und formatieren, siehe hierzu die Seitenansicht in Visual Studio Code.

## Überschriften
In Markdown gibt es bis zu 6 Stufen der Überschriften zur Unterteilung von Text.

```md
# Überschrift 1
## Überschrift 2
### Überschrift 3
#### Überschrift 4
##### Überschrift 5
###### Überschrift 6
```

## Code

Markdown ermöglicht die Dokumentation von Code entweder Inline, mitten im Text, mittels `public class myJavaProgram` oder als Codeblock.

```
public class MyJavaProgram{
    int a = 5;
    public String;
    // usw.
}
```

Syntax-Highlighting wird mit der Annotation des Suffix hinzugefügt.

```java
public class MyJavaProgram{
    int a = 5;
    public String;
    // usw.
}
```

Das Highlighting von Syntax ist für viele verschiedene Programmier- und Skriptsprachen möglich, wie z.B. C#, C++, Java, Python, PHP, SQL, etc..

```sql
SELECT name
FROM student
WHERE name = "Thomas"
```

## Tabellen
Tabellen kann man in Markdown folgenderweise machen. Die | Symbole macht man mit ALT GR + '<'

| A | B | C |
| --- | --- | --- |
| 1| 2| 3 |
| 4| 5| 6 |
| 7| 8| 9 |

Wichtig ist hier die zweite Zeile, in der man lediglich '---' in jede Zelle schreibt

## Aufzählungen
Es gibt sortierte und unsortierte Aufzählungen.
Sortierte starten mit einer Zahl:
1. Erstens
2. Zweitens
3. Drittens

Unsortierte starten mit einem '-':
- Erstens
- Zweitens
- Drittens

