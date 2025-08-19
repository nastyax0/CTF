$whywhwyhwyhwy = "_persist"
$AAABBx0 = "_leaks"
$tyuiiuytrertyui = "but, you deserve the flag!"
$tungtungtungsahhurrrr = "memory"
$bcbrbehehueduyuhudehwnfb = "_but"
$wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD  = "signal{"
$bambardinocrocodilo = "}"
$tyyuututuubdebbcbiwiwcn = "Wait! What?"
$nwiggaligga = "sike! thats the wrong number!"
$byrevbyrbybyebyecyecybycbcdbybecbyuebu = "_masks"
$burc3iuirubiucbiu = "Damn, you got here too?!"
$ballerinacappucina = "the salesman is handsome isnt it?"
$sigmasigmasigmasigma = "kali linux is bad, debian is good"

$flag1 = $AAABBx0 + "	"+ $nwiggaligga + $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD  + $whywhwyhwyhwy + $bambardinocrocodilo + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu  + $bcbrbehehueduyuhudehwnfb

$flag2 = $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD  + $bcbrbehehueduyuhudehwnfb + $AAABBx0 + $whywhwyhwyhwy + "	"+$ballerinacappucina + $bambardinocrocodilo + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu

$flag3 =$bcbrbehehueduyuhudehwnfb + $AAABBx0 + $whywhwyhwyhwy + $bambardinocrocodilo + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu +"	"+ $nwiggaligga + $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD

$flag4 = $sigmasigmasigmasigma + "	" + $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD  + $bcbrbehehueduyuhudehwnfb + $AAABBx0 + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu + $whywhwyhwyhwy + $bambardinocrocodilo

$flagr7 = $tyyuututuubdebbcbiwiwcn+ $burc3iuirubiucbiu + $tyuiiuytrertyui + ": " +$wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu + $bcbrbehehueduyuhudehwnfb + $AAABBx0 + $whywhwyhwyhwy + $bambardinocrocodilo

$flag5 =  $whywhwyhwyhwy + $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD + $bambardinocrocodilo + $tungtungtungsahhurrrr+{		} + "organizers are script kiddie:(" + $ballerinacappucina + "	" + $byrevbyrbybyebyecyecybycbcdbybecbyuebu + $bcbrbehehueduyuhudehwnfb + $AAABBx0 

$flag6 = $ballerinacappucina + $wvcvgegebyuyuyyydiewnoiYYFVVHHTRDSWWSXXXCCVBJUUYTDD  + $bcbrbehehueduyuhudehwnfb + $AAABBx0 + $whywhwyhwyhwy + $nwiggaligga + $bambardinocrocodilo + $tungtungtungsahhurrrr + $byrevbyrbybyebyecyecybycbcdbybecbyuebu +{		}+ "wanna be hecker :3"


Write-Host "Hello, Players! wOulD yoU lIkE to tRy SOme gaMes, kiKe sqUid gaMes /s"
Write-Host "--------------------------------------------------------------------------------"
$progressFile = "$PSScriptRoot\.run_count.txt"
if (Test-Path $progressFile) {
    $runCount = [int](Get-Content $progressFile)
} else {
    $runCount = 0
}

$runCount++
Set-Content $progressFile $runCount


$index = (($runCount - 1) % 6) + 1
$varName = "flag$index"


Write-Host (Get-Variable -Name $varName -ValueOnly)
