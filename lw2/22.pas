PROGRAM SarahRever(INPUT, OUTPUT);
USES
  DOS;
VAR
  Result: string;
BEGIN{SarahRever}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  Result := GetEnv('QUERY_STRING');
  IF Result = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land')
  ELSE
    IF Result = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea')
    ELSE
      WRITELN('Sarah didnt say')
END.{SarahRever}

