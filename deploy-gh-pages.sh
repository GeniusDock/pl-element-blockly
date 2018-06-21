branch=${3:-"dev"} # default to dev when branch isn't specified

mkdir tempGH
cd tempGH
../gp.sh Program-AR pl-element-blockly ${branch}
cd ..
rm -rf tempGH
