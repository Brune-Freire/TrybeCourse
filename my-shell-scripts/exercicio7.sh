#!/bin/bash
DIRETORIO=$1
if [ -d "$DIRETORIO" ]
then
QTD=`ls -l $DIRETORIO |  wc -l`
echo "O $DIRETORIO tem $QTD arquivos."
else echo "O argumento $DIRETORIO não é um diretório!"
fi
