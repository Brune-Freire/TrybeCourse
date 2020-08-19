#!/bin/bash
read -p "Informe um caminho de arquivo ou diretório: " CAMINHO
if [ -d "$CAMINHO" ]
then echo "$CAMINHO é um diretório!"
elif [ -f "$CAMINHO" ]
then echo "$CAMINHO é um arquivo comum!"
else echo "$CAMINHO é uma outra coisa!"
fi
ls -l $CAMINHO
