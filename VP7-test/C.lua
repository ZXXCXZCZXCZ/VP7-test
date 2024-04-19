passworddd = "test"

RegisterNetEvent("AboA7med:Ui:send", function(TrueOrFalse)
    if TrueOrFalse == true then
        SetNuiFocus(true, true)
        SendNUIMessage({
            CheckUi = "OpenUi",
            PassLua = passworddd
        })

    elseif TrueOrFalse == false then
        SetNuiFocus(false, false)
        SendNUIMessage({
            CheckUi = "CloseUi",
            PassLua = passworddd
        })
    end
end)


RegisterCommand("testui", function()
    TriggerEvent("AboA7med:Ui:send", true)
end)

RegisterNUICallback("testclose", function()
    TriggerEvent("AboA7med:Ui:send", false)
end)

RegisterNUICallback("CheckDone", function(data)
    asdasd = data.TheEndPass
    
    if asdasd == passworddd then
        print("nice pass")
        TriggerEvent("AboA7med:Ui:send", false)
    else
        print("bad pass")
    end
end)