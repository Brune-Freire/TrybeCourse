#!/bin/bash
CAMINHO=$@
for CAMINHO in $CAMINHO
do
if [ -d "$CAMINHO" ]
then echo "$CAMINHO é um diretório!"
elif [ -f "$CAMINHO" ]
then echo "$CAMINHO é um arquivo comum!"
else echo "$CAMINHO é alguma outra coisa!"
fi
ls -l $CAMINHO
done
